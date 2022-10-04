import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
`

export const TopBannerContainer = styled.div`
  height: 35vh;
  width: 100%;
  padding: 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const BannerHeading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  margin: 10px 0;
`

export const BannerText = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
`

export const PlayListContainer = styled.div`
  background-color: #152850;
  padding: 15px 30px;
  height: 65vh;
`

export const SpaceBetweenRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

export const PlayListHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`

export const SearchBarContainer = styled.div`
  align-self: flex-start;
  padding: 10px 15px;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  color: #cbd5e1;
  font-size: 20px;
  background-color: transparent;
  width: 250px;
  margin-right: 5px;
  padding: 0;
  border: none;
  outline: none;
  outline: none;
`

export const TracksListContainer = styled.ul`
  padding: 0;
  overflow-y: auto;
  height: 55vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`
export const NotFoundText = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  line-height: 56px;
  margin: 30px;
  text-align: center;
`
