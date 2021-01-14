import styled from 'styled-components'
import submitted from '../../statics/submitted.gif'

export const SubmitWrapper = styled.div`
  display: flex;
  height: 1000px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #eee;
  padding: 30px 15px;
  box-sizing: border-box;
  color: #666;
`

export const SubmitImg = styled.div`
  background: url(${submitted});
`

