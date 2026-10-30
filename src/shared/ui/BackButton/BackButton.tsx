import { useLocation, useNavigate } from 'react-router';
import s from './BackButton.module.css';

export function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    function goBack() {
        // У первой записи истории ключ 'default': страницу открыли по прямой
        // ссылке, и шаг назад увёл бы с сайта (или не сделал бы ничего).
        // Тогда ведём на главную
        if (location.key === 'default') {
            navigate('/');
            return;
        }
        navigate(-1);
    }

    return (
        <button type="button" className={s.back} onClick={goBack}>
            <span aria-hidden="true">←</span> Назад
        </button>
    );
}
