export interface User {
    id?: string; // O "?" torna o campo opcional, pois o id geralmente é definido pelo banco de dados
    name: string;
    email?: string; // Opcional se você quer permitir usuários sem email
    // Adicione aqui outros campos conforme necessário
  }
  