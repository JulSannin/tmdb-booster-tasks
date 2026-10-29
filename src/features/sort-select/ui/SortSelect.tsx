import {
    FormControl,
    Select,
    MenuItem,
    type SelectChangeEvent,
} from '@mui/material';
import s from './SortSelect.module.css';

export type SortOption = { value: string; label: string };

type Props = {
    options: SortOption[];
    value: string;
    onChange: (value: string) => void;
};

export function SortSelect({ options, value, onChange }: Props) {
    function handleChange(e: SelectChangeEvent) {
        onChange(e.target.value);
    }

    return (
        <FormControl fullWidth size="small">
            <Select
                className={s.select}
                value={value}
                onChange={handleChange}
                MenuProps={{
                    slotProps: { paper: { className: s.menuPaper } },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
