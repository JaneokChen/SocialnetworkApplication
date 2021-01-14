import styled from 'styled-components'

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  padding: 30px 15px;
  box-sizing: border-box;
  border-radius: 15px;
`

export const TitleWrapper = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #eee;
`

export const TextTitle = styled.input.attrs({
  placeholder: '输入文章标题...'
})`
  box-sizing: border-box;
  height: 45px;
  width: 700px;
  contenteditable: true;
  margin-left: 10px;
  border: none;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #333;
  :focus{
    outline: none;
  }
   &:: placeholder{
     color: #999;
     font-size: 18px;
     font-weight: bolder;
   }
`

export const Button = styled.div`
  width: 50px;
  height: 40px;
  line-height: 40px;
  padding-left: 16px;
  margin-right: 10px;
  color: #fff;
  background:#009966;
  border-radius: 15px;
  cursor: pointer;
  float:right;
`

export const TextSection = styled.textarea`
  box-sizing: border-box;
  width: 900px;
  height: 1000px;
  padding:20px;
  background:white;
  border: none;
  color: #333;
  :focus{
    outline: none;
  }
`


