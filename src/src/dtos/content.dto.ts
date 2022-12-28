import { DtoBase } from './dtoBase';
import { ContentType } from 'src/enum/contentType.enum';
import { UserDto } from './user.dto';

export class ContentDto extends DtoBase {
    title?: string;
    type?: ContentType;
    body?: string;
    imageUrls?: string;
    videoUrl?: string;
    users?: UserDto[];
}