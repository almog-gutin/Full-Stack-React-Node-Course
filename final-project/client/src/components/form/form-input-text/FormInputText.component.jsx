import './form-input-text.styles.css';

const FormInputText = (props) => {
    return (
        <input
            className={props.className ? props.className : 'form-input'}
            id={props.id}
            type={props.type ? props.type : 'text'}
            required={props.required}
            onInput={props.handleInput}
        />
    );
};

export default FormInputText;
