import styled from 'styled-components'

export const TrackItemContainer = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`

export const TrackImg = styled.img`
  width: 150px;
  margin-right: 16px;
`

export const NameText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 600;
`

export const GenreText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #3b82f6;
  font-weight: 600;
`

export const DurationText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 500;
  margin-right: 24px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  margin: 8px;
  cursor: pointer;
  outline: none;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
