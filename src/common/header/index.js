import React,{Component}from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style.js'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom'

class Header extends Component{
  getListArea(){
    const {focused, list, page, totalPage, mouseIn,handleMouseEnter, handleMouseLeave,handleChangePage} = this.props
    const newList = list.toJS()
    const pageList = []

    if(newList.length){
      for (let i = (page-1)*10; i < page*10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused || mouseIn){
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }

  render(){
    const {focused, handleInputFocus, handleInputBlur,list,login,logout} = this.props
    return(
      <div>
        <HeaderWrapper>
          <Link to='/'>
            <Logo/>
          </Link>
          <Nav>
            <Link to='/'>
              <NavItem className='left active'>首页</NavItem>
            </Link>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={()=>handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused?'focused iconfont':'iconfont'}>&#xe614;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            {
              login ?
              <NavItem onClick={logout} className='right'>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }
            <Button className='reg'>注册</Button>
            <Link to='/write'>
              <Button className='writing'>
                <i className='iconfont'>&#xe615;</i>
                写文章
              </Button>
            </Link>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    handleInputFocus(list){
      (list.size===0)&&dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage){
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
