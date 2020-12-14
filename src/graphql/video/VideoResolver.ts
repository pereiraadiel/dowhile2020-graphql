import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import Video from './Video';
import VideoSchema from '../../models/VideoSchema';
import { forEachField } from 'apollo-server';

@InputType()
class VideoInput {
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  _id: String;

  @Field()
  category: String;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video])
  async videos() {  
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput);
    return video;
  }
}

export default VideoResolver;