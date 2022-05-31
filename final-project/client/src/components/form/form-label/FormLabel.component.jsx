import './form-label.styles.css';

const FormLabel = (props) => {
    return (
        <label className={props.className ? props.className : 'form-label'} htmlFor={props.htmlFor}>
            {props.text}
        </label>
    );
};

export default FormLabel;
