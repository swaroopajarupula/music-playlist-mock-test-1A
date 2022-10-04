import {useState} from 'react'
import {BsSearch} from 'react-icons/bs'

import TrackItem from '../TrackItem'
import {
  AppContainer,
  TopBannerContainer,
  BannerHeading,
  BannerText,
  PlayListContainer,
  SpaceBetweenRow,
  PlayListHeading,
  SearchBarContainer,
  Input,
  TracksListContainer,
  NotFoundText,
} from './styledComponents'

const MusicPlayList = ({initialTracksList}) => {
  const [tracksList, setTracksList] = useState(initialTracksList)
  const [searchInput, setSearchInput] = useState('')

  const getSearchResults = () => {
    const filteredList = tracksList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  const deleteTrack = id => {
    const updatedList = tracksList.filter(item => item.id !== id)
    setTracksList(updatedList)
  }

  return (
    <AppContainer>
      <TopBannerContainer>
        <BannerHeading>Ed Sheeran</BannerHeading>
        <BannerText>Singer</BannerText>
      </TopBannerContainer>
      <PlayListContainer>
        <SpaceBetweenRow>
          <PlayListHeading>Songs Playlist</PlayListHeading>
          <SearchBarContainer>
            <Input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <BsSearch size={20} color="#ffffff" />
          </SearchBarContainer>
        </SpaceBetweenRow>
        <TracksListContainer>
          {getSearchResults().map(item => (
            <TrackItem key={item.id} data={item} onDelete={deleteTrack} />
          ))}
          {getSearchResults().length === 0 && (
            <NotFoundText>No Songs Found</NotFoundText>
          )}
        </TracksListContainer>
      </PlayListContainer>
    </AppContainer>
  )
}

export default MusicPlayList
