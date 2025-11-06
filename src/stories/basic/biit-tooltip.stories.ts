import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitButtonComponent, BiitButtonModule} from '@biit-solutions/wizardry-theme/button';
import {BiitTooltipModule} from '@biit-solutions/wizardry-theme/info';

export default {
  title: 'Basic/Info/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [BiitButtonModule, BiitTooltipModule]
    }),
  ],
} as Meta;

const Template: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <h3 tooltip="Meowth, that's right!"
        style="position:fixed; top:25%; left:50%; translate: -50% -50%">
      Hover over buttons to show tooltips
    </h3>
    <button biit-button tooltip="Noticias breves, ya está aquí para ustedes Mr. Quitanieves"
                 style="position: fixed; top: 1rem; left: 1rem;">
      Lawful good
    </button>
    <button biit-button tooltip="Do it for her"
                 style="position: fixed; top: 1rem; left: 50%; translate: -50% 0;">
      Neutral good
    </button>
    <button biit-button tooltip="¡Con la de hierro que tiene!"
                 style="position: fixed; top: 1rem; right: 1rem;">
      Chaotic good
    </button>
    <button biit-button tooltip="Es viernes de siluetas"
                 style="position: fixed; top: 50%; left: 1rem; translate: 0 -50%;">
      Lawful neutral
    </button>
    <button biit-button tooltip="El dinero se puede intercambiar por bienes y servicios"
                 style="position: fixed; top: 50%; left: 50%; translate: -50% -50%;">
      True neutral
    </button>
    <button biit-button tooltip="Este tooltip es una divinidad, ¿POR QUÉ EL MÍO NO ES IGUAL?"
                 style="position: fixed; top: 50%; right: 1rem; translate: 0 -50%;">
      Chaotic neutral
    </button>
    <button biit-button tooltip="-Debe responder con sinceridad, ¿lo entiende? +Sí. *Explota*"
                 style="position: fixed; bottom: 1rem; left: 1rem;">
      Lawful evil
    </button>
    <button biit-button tooltip="¿La aurora boreal? ¿En esta época del año, a esta hora del día, en esta zona del país, localizada exclusivamente en su cocina?"
                 style="position: fixed; bottom: 1rem; left: 50%; translate: -50% 0;">
      Neutral evil
    </button>
    <button biit-button tooltip="Sin tele y sin cerveza, Homer pierde la cabeza"
                 style="position: fixed; bottom: 1rem; right: 1rem; translate: 0 0;">
      Chaotic evil
    </button>
`});

export const Default = Template.bind({});
