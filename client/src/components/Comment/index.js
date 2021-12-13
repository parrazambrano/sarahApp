import React, { useState } from 'react';
import { DELETE_COMMENT } from '../../utils/mutations';
import { QUERY_ALL_POSTS } from '../../utils/queries';
import { useMutation } from "@apollo/client";
import { Button, Alert } from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { formatDate } from '../../utils/helpers';
import './style.css';

export const Comment = ({ props, postId, user }) => {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)
    const [deleteComment,] = useMutation(DELETE_COMMENT);
    const [state,] = useStoreContext();

    const handleDelete = () => {
        deleteComment({
            variables: {
                _id: props._id,
                post: postId
            },
            refetchQueries: [{ query: QUERY_ALL_POSTS }],
        })
        setShowDeleteAlert(false)
    }

    return (<>
        <div>
            <p className='ms-3'>{props.content} <br/>-
                <span className='fw-light'>{props.username}</span>
                {state.currentUser._id === props.user._id && <span onClick={() => setShowDeleteAlert(true)}>  ❌</span>}
                <span className='text-muted'> - {formatDate(props.date)}</span>
            </p>
        </div>


        {showDeleteAlert &&
            <div className="commentAlertBackground">
                <Alert className='commentAlertBox' show={true} variant="danger">
                    <Alert.Heading>Are you sure?</Alert.Heading>
                    <p>
                        Its gonna be gone forever and you'll never see it again
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleDelete} className='me-auto' variant="outline-danger">
                            I'm Sure!
                        </Button>
                        <Button onClick={() => setShowDeleteAlert(!showDeleteAlert)} variant="success">
                            Nevermind!
                        </Button>
                    </div>
                </Alert>
            </div>}
    </>
    )
}
