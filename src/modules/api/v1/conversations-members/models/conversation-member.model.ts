import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '@/modules/api/v1/user/models/user.model';
import { Conversation } from '../../conversations/models/conversation.module';


@Schema()
export class ConversationMember {

    @Prop({ type: String })
    login: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, schema: Conversation })
    conversation: Conversation;

}