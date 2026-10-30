import { DataWrapper } from '@/shared/ui/DataWrapper';
import { useGet3PersonByPersonIdQuery } from '../api/api';
import { mapPersonDetails, type PersonInfoData } from '../model/mapDetails';
import { PersonInfoSkeleton } from './PersonInfoSkeleton';
import s from './PersonInfo.module.css';

// Первый блок страницы: фото, имя, даты, место рождения и биография
export function PersonInfo({ id }: { id: number }) {
    const { data, isLoading, isFetching, isError } =
        useGet3PersonByPersonIdQuery({ personId: id });

    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            skeleton={<PersonInfoSkeleton />}
        >
            {data && <Info info={mapPersonDetails(data)} />}
        </DataWrapper>
    );
}

function Info({ info }: { info: PersonInfoData }) {
    // Строки, которых TMDB не знает, не рисуем
    const facts = [
        ['Профессия', info.department],
        ['Родился', info.birth],
        ['Умер', info.death],
        ['Место рождения', info.place],
    ].filter(([, value]) => value);

    return (
        <div className={s.info}>
            <div className={s.photoBox}>
                <img className={s.photo} src={info.photoUrl} alt={info.name} />
            </div>
            <div className={s.text}>
                <h1 className={s.name}>{info.name}</h1>
                {facts.length > 0 && (
                    <dl className={s.facts}>
                        {facts.map(([label, value]) => (
                            <div key={label} className={s.fact}>
                                <dt className={s.label}>{label}</dt>
                                <dd className={s.value}>{value}</dd>
                            </div>
                        ))}
                    </dl>
                )}
                <p className={s.biography}>
                    {info.biography || 'Биография отсутствует'}
                </p>
            </div>
        </div>
    );
}
