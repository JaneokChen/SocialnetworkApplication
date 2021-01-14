import React, {PureComponent} from 'react'
import {WriterWraper,WriterItem,WriterLogo,WriterText,WriterName,WriterInfo} from '../style'
import {connect} from 'react-redux'

class Writer extends PureComponent {
  render(){
    return (
      <WriterWraper>
        热门作者
        {
          this.props.list.map((item)=>{
            return(
              <WriterItem key={item.get('id')}>
                  <img alt='' className='writerPic' src={item.get('imgUrl')}/>
                  <WriterText>
                    <p className='writerName'> {item.get('writerName')}</p>
                    <p className='writerLikes'>{item.get('writerLikes')}</p>
                  </WriterText>
                  +关注
              </WriterItem>
              )
          })
        }
      </WriterWraper>
    )
  }
}

const mapStateToProps = (state)=>({
  list: state.getIn(['home','writerList'])
})

export default connect(mapStateToProps, null)(Writer)
