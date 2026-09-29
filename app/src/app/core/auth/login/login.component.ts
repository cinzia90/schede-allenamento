import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { it } from '../../i18n/it';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly t = it.login;

  email = '';
  password = '';
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  private returnUrl = '/';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/';
  }

  async submit(): Promise<void> {
    this.errorMessage.set(null);
    this.loading.set(true);

    const { error } = await this.auth.signInWithPassword(this.email, this.password);
    this.loading.set(false);

    if (error) {
      this.errorMessage.set(this.t.error);
      return;
    }

    this.router.navigateByUrl(this.returnUrl);
  }
}
