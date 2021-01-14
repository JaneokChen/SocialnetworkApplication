import React, {PureComponent} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends PureComponent {
  render(){
    return(
      <RecommendWrapper>
        热门讨论
        {
          this.props.list.map((item)=>{
            return <RecommendItem key={item.get('id')} className={item.get('name')} >{item.get('topic')}</RecommendItem>
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state)=>({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend)
