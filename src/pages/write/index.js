import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {WriteWrapper,TitleWrapper,TextTitle,TextSection,Button} from './style'
import {Link} from 'react-router-dom'

class Write extends PureComponent {
  render(){
    const {loginStatus} = this.props
    if(loginStatus){
      return (
        <div>
          <WriteWrapper>
            <TitleWrapper>
              <TextTitle/>
              <Link to='/submit'>
                <Button>发布</Button>
              </Link>
            </TitleWrapper>
            <TextSection/>
          </WriteWrapper>
        </div>
      )
    }else{
      return <Redirect to='/login'/>
    }
  }
}

const mapStateToProps = (state)=>({
  loginStatus:state.getIn(['login','login'])
})

export default connect(mapStateToProps, null)(Write)
