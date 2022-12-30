import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/User';
import { ConfirmationContext, ResetPasswordContext } from '../../models/email.context';
import { EmailTemplate } from '../../models/template-mail.const';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(context: ConfirmationContext) {
    await this.mailerService.sendMail({
      to: context.to,
      subject: context.subject,
      template: EmailTemplate.confirmation,
      context: {
        name: context.name,
        username: context.username,
        title: context.subject
      }
    });
  }

  async sendUserResetPasswordLink(context: ResetPasswordContext) {
    await this.mailerService.sendMail({
      to: context.to,
      subject: context.subject,
      template: EmailTemplate.confirmation,
      context: context.data,
    });
  }
}