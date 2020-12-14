import mongoose from 'mongoose';

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pmg2g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);