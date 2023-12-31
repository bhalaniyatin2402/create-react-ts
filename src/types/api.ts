export interface Sample {
  success: boolean;
  message: string;
  photo: {
    url: string
    title: string
    user: number
    description: string
    id: number
  }
}
