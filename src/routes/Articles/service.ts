import express, { Router } from 'express';
import ArticleModal from '../../schema/articleSchema/article.modal';

const articleModal = ArticleModal;

class ArticlesService {
    constructor() {};

    async createArticle(res: express.Response, DATA: any, USER: any){

        console.log({ USER, DATA: DATA.title, tr: DATA.DOIURL })
        const eachArticle: any = await ArticleModal.findOne({ title: DATA.title });
        if(eachArticle){
            return res.send({ message: 'article already exist' })
        }
        const createdArticle = new articleModal({
            userId: USER._id, 
            title: DATA.title,
            author: DATA.author,
            journal: DATA.journal,
            monthAndYearOfPublication: DATA.monthAndYearOfPublication,
            volumeNumber: DATA.volumeNumber,
            typeOfPublication: DATA.typeOfPublication,
            nameOfPublisher: DATA.nameOfPublisher,
            DOIURL: DATA.DOIURL,
        });

        await createdArticle.save();

        return res.status(200).send({ success: true});
    }

    async findAllUsers (res: express.Response) {
        res.send({success: true, data: await ArticleModal.find()});
    }

    async updateArticles (req: express.Request, res: express.Response) {
        const updateID = req.params.id;
        const data = await ArticleModal.findByIdAndUpdate( updateID, req.body, { new: true }).catch((err) => console.log(err))
        res.send({ success: true, data })
    }

    async deleteArticles (req: express.Request, res: express.Response) {
        const id = req.params.id;
         await ArticleModal.findByIdAndDelete(id)
            .then(borrado => {
                res.send(borrado);
            })
            .catch(error => {
                res.status(500).send({ error });
            });
    }

}

module.exports = ArticlesService;{}