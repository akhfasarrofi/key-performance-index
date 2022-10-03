import Card from 'theme/overrides/Card';
import Paper from 'theme/overrides/Paper';
import Input from 'theme/overrides/Input';
import Button from 'theme/overrides/Button';
import Tooltip from 'theme/overrides/Tooltip';
import Backdrop from 'theme/overrides/Backdrop';
import Typography from 'theme/overrides/Typography';
import CssBaseline from 'theme/overrides/CssBaseline';
import Autocomplete from 'theme/overrides/Autocomplete';

export default function ComponentsOverrides(theme: any) {
    return Object.assign(
        Card(theme),
        Input(theme),
        Paper(),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Typography(theme),
        CssBaseline(),
        Autocomplete(theme),
    );
}
