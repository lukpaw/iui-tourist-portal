export interface InformationRequest {
  question: string;
  sourceLanguage: string;
}

export interface InformationResponse {
  results: string[];
}
