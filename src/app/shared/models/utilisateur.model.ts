export type Utilisateur = {
  userId: string;
  nom: string;
  prenoms: string;
  mail: string | null;
  userEstActif: boolean;
  dateCreation: string;
  usermatricule: string;
};

export type LoginReq = {
  usermatricule: string;
  userPassword: string;
};
