export interface InformationRequest {
  question: string;
  sourceLanguage: string;
}

export interface InformationResponse {
  results: string[];
}

export interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface TranslationResponse {
  translatedText: string;
}
