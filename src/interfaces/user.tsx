export interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: Metadata;
  multiFactor: MultiFactor;
  phoneNumber: null;
  photoURL: string;
  providerData: Array<string[]>;
  providerId: string;
  refreshToken: string;
  tenantId: null;
  uid: string;
}

export interface Metadata {
  creationTime: number;
  lastSignInTime: number;
}

export interface MultiFactor {
  enrolledFactors: string[];
}
