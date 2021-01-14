import styled from 'styled-components'
import mainImg from '../../statics/mainImg.jpg'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const MainImg = styled.div`
  background: url(${mainImg});
  width: 625px;
  height: 270px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -18px;
  padding: 0px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem= styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
  margin-left: 18px;
  margin-top: 10px;
  padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 30px 0;
  width: 280px;
  font-size: 20px;
  .firstRec{
    color:#3F4B3B;
  }
  .secondRec{
    color: #4F86C6;
  }
  .thirdRec{
    color: #D499B9;
  }
  .forthRec{
    color:#F17F42;
  }
  .fifthRec{
    color: #6E7783;
  }
  .sixthRec{
    color: #5CAB7D;
  }
  .seventhRec{
    color: #5A9367;
  }
  .eigthRec{
    color: #44633F;
  }
  .ninethRec{
    color: #3F4B3B;
  }
  .tenthRec{
    color: #379392;
  }
`

export const RecommendItem = styled.div`
  width: 240px;
  margin-top: 25px;
  height: 20px;
  font-size: 16px;
  border-radius: 50%;
`

export const WriterWraper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 278px;
  padding: 20px 10px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  font-size: 18px;
  .writerPic{
    width: 55px;
    height: 55px;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px #eee;
    border-radius: 50%;
  }
`

export const WriterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  height: 40px;
  margin-top: 20px;
  color:#42c02e;
  font-size:14px;
  font-weight: bolder;
`

export const WriterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  height: 40px;
  margin-left: 5px;
  .writerName{
    color:#333;
    font-size: 15px;
  }
  .writerLikes{
    color:#969696;
    font-size: 13px;
    margin-top:5px;
  }
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
  cursor: pointer;
  :hover{
    font-weight: bolder;
    background: #009966;
  }
`

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
  border-radius: 50%;
  background:#a5a5a5;
  color: #eee;
  cursor: pointer;
  :hover{
    font-weight: bolder;
    background: #009966;
    border: 1px solid #009966;
  }
`
