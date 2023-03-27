import {useForm} from "../../../hooks/useForm";
export const AddComment = ({
    onCommentSubmit,
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit)
    return (
        <article className="comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                <textarea name="comment" placeholder="Comment..." value={values.comment} onChange={changeHandler} ></textarea>
                <input className="btn submit" type="submit" value="Add new comment" />
            </form>
        </article>
    )
}