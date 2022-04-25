import mongoose from "mongoose";

export interface IArticle extends mongoose.Document {
    userId: string, 
    title: string,
    author: string,
    journal: string,
    monthAndYearOfPublication: string,
    volumeNumber: string,
    typeOfPublication: string,
    nameOfPublisher: string,
    DOIURL: string,
    date: Date;
    _id?: string;
};


export const ArticleSchema = new mongoose.Schema({
    userId: String,
    title: String,
    author: String,
    journal: String,
    monthAndYearOfPublication: String,
    volumeNumber: String,
    typeOfPublication: String,
    nameOfPublisher: String,
    DOIURL: String,
    date: {
      type: Date,
      default: new Date()
    },
  });

const ArticleModal = mongoose.model<IArticle>("Article", ArticleSchema);
export default ArticleModal;