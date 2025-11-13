export interface ImageAnalysisResult {
  caption: string;
  short_caption: string;
  tags_extracted: string[];
  final_tags: {
    tag: string;
    score: number;
  }[];
}

export interface InlineData {
  mimeType: string;
  data: string;
}