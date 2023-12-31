import { ObjectType, InputType, Field, Int, GraphQLISODateTime, PartialType, ID } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Paginated } from '@/common/interface'
import { FilmEntity } from '@/db/entities/film'
import { FilmTopCast } from '@/common/types'
import { FilmGalleryEntity } from '@/db/entities/filmGalery'

@ObjectType({ isAbstract: true })
export class PaginatedFilm extends Paginated(FilmEntity) {}

@ObjectType({ isAbstract: true })
export class PaginatedFilmGallery extends Paginated(FilmGalleryEntity) {}

@InputType({ isAbstract: true })
export class CreateFilmDto {
  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  description: string

  @Field()
  @IsNotEmpty()
  background: string

  @Field()
  @IsNotEmpty()
  avatar: string

  @Field(() => Int)
  @IsNotEmpty()
  duration: number

  @Field(() => GraphQLISODateTime)
  @IsNotEmpty()
  releaseDate: Date

  @Field(() => [String], { defaultValue: [] })
  @IsNotEmpty()
  genres: string[]

  @Field(() => [String], { defaultValue: [] })
  @IsNotEmpty()
  stars: string[]

  @Field(() => [String], { defaultValue: [] })
  @IsNotEmpty()
  directors: string[]

  @Field(() => [FilmTopCast], { defaultValue: [] })
  @IsNotEmpty()
  topCasts: FilmTopCast[]

  @Field(() => GraphQLISODateTime)
  @IsNotEmpty()
  endDateSubscriber: Date
}

@InputType({ isAbstract: true })
export class UpdateFilmDto extends PartialType(CreateFilmDto) {
  @Field(() => ID)
  @IsNotEmpty()
  id: number
}

@InputType({ isAbstract: true })
export class UpsertGalleryFilmDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  id?: number | null

  @Field()
  @IsString()
  name: string

  @Field()
  @IsString()
  url: string

  @Field()
  @IsNotEmpty()
  @IsNumber()
  filmId: number
}
