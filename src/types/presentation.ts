interface VideoType {
  description: string;
  duration: number;
  id: string;
  source: string;
  subtitle: string;
  thumb: string;
  title: string;
}

export interface Presentation {
  endTime: string;
  startTime: string;
  video: VideoType;
}
