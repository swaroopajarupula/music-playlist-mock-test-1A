import {RiDeleteBin7Line} from 'react-icons/ri'
import {
  TrackItemContainer,
  TrackImg,
  NameText,
  GenreText,
  DurationText,
  DeleteButton,
  FlexRow,
} from './styledComponents'

const TrackItem = ({data, onDelete}) => {
  const {id, imageUrl, name, genre, duration} = data

  return (
    <TrackItemContainer>
      <FlexRow>
        <TrackImg alt="track" src={imageUrl} />
        <div>
          <NameText>{name}</NameText>
          <GenreText>{genre}</GenreText>
        </div>
      </FlexRow>
      <FlexRow>
        <DurationText>{duration}</DurationText>
        <DeleteButton id="delete" testid="delete" onClick={() => onDelete(id)}>
          <RiDeleteBin7Line size={30} color="#ffffff" />
        </DeleteButton>
      </FlexRow>
    </TrackItemContainer>
  )
}

export default TrackItem
