import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importando ReactiveFormsModule

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule], // Importando o módulo aqui
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
      opcaoSexual: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const { senha, confirmarSenha } = this.cadastroForm.value;

      if (senha !== confirmarSenha) {
        alert('As senhas não conferem!');
        return;
      }

      console.log("Cadastro realizado com sucesso!");
      // Lógica de cadastro (salvar, enviar para a API, etc.)
    }
  }
}

