import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {SubmitWrapper,SubmitImg} from './style'

class Submit extends PureComponent {
  render(){
    return(
      <SubmitWrapper>
        <SubmitImg/>
        发布成功！有了你的分享，香樟树下会变得更好！
      </SubmitWrapper>
    )
  }
}
export default connect(null, null)(Submit)
