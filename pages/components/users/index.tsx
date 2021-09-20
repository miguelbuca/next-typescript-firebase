import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators , Dispatch} from 'redux'

import { ApplicationState } from '../../store/rootReducer'

import * as UsersActions from '../../store/ducks/users/actions'

export const Users = ({ users }: ApplicationState): JSX.Element => {
    
    return (
        <div>
            <ul>
                {
                    users?.data.map((item, index) => <li key={index}>{ item.name }</li>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ users }: ApplicationState ) => ({
    users: users
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(UsersActions,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users)
