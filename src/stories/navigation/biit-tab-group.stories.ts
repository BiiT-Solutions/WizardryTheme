import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitToggleComponent} from 'biit-ui/inputs';
import {BiitTabGroupModule} from 'biit-ui/navigation';

export default {
  title: 'Navigation/Tab Group',
  decorators: [
    moduleMetadata({
      imports: [BiitTabGroupModule, FormsModule]
    }),
  ]
} as Meta;

const Template: Story<BiitToggleComponent> = (args: BiitToggleComponent) => ({
  props: args,
  template:`
    <biit-tab-group style="display: block">
      <biit-tab name="Tab 1">
        Lorem fistrum te va a hasé pupitaa al ataquerl está la cosa muy malar diodenoo a wan caballo blanco caballo negroorl de la pradera al ataquerl. No puedor quietooor pupita amatomaa va usté muy cargadoo está la cosa muy malar pupita. A gramenawer a peich la caidita mamaar. A wan mamaar apetecan qué dise usteer amatomaa pecador torpedo al ataquerl me cago en tus muelas. Fistro tiene musho peligro a wan torpedo diodeno se calle ustée te voy a borrar el cerito te voy a borrar el cerito al ataquerl de la pradera. Quietooor la caidita la caidita te va a hasé pupitaa al ataquerl. A wan va usté muy cargadoo a peich ese que llega. No te digo trigo por no llamarte Rodrigor llevame al sircoo benemeritaar apetecan al ataquerl se calle ustée mamaar pecador diodeno benemeritaar. A gramenawer te voy a borrar el cerito sexuarl a gramenawer condemor te va a hasé pupitaa pecador caballo blanco caballo negroorl hasta luego Lucas.
      </biit-tab>
      <biit-tab name="Tab 2">
        Lorem fistrum te va a hasé pupitaa al ataquerl está la cosa muy malar diodenoo a wan caballo blanco caballo negroorl de la pradera al ataquerl. No puedor quietooor pupita amatomaa va usté muy cargadoo está la cosa muy malar pupita. A gramenawer a peich la caidita mamaar. A wan mamaar apetecan qué dise usteer amatomaa pecador torpedo al ataquerl me cago en tus muelas. Fistro tiene musho peligro a wan torpedo diodeno se calle ustée te voy a borrar el cerito te voy a borrar el cerito al ataquerl de la pradera. Quietooor la caidita la caidita te va a hasé pupitaa al ataquerl. A wan va usté muy cargadoo a peich ese que llega. No te digo trigo por no llamarte Rodrigor llevame al sircoo benemeritaar apetecan al ataquerl se calle ustée mamaar pecador diodeno benemeritaar. A gramenawer te voy a borrar el cerito sexuarl a gramenawer condemor te va a hasé pupitaa pecador caballo blanco caballo negroorl hasta luego Lucas.
        <br><br>
        Papaar papaar pupita ese que llega va usté muy cargadoo diodeno tiene musho peligro quietooor te va a hasé pupitaa caballo blanco caballo negroorl ese hombree apetecan. Amatomaa no puedor benemeritaar amatomaa pupita pupita diodeno. Papaar papaar diodeno te va a hasé pupitaa benemeritaar caballo blanco caballo negroorl al ataquerl está la cosa muy malar la caidita te voy a borrar el cerito al ataquerl ese que llega. Me cago en tus muelas a peich jarl qué dise usteer amatomaa fistro hasta luego Lucas. A gramenawer torpedo quietooor tiene musho peligro pecador a wan por la gloria de mi madre. Diodeno está la cosa muy malar llevame al sircoo está la cosa muy malar jarl te va a hasé pupitaa de la pradera te voy a borrar el cerito al ataquerl a peich hasta luego Lucas.
      </biit-tab>
      <biit-tab name="Tab 3">
        Lorem fistrum te va a hasé pupitaa al ataquerl está la cosa muy malar diodenoo a wan caballo blanco caballo negroorl de la pradera al ataquerl. No puedor quietooor pupita amatomaa va usté muy cargadoo está la cosa muy malar pupita. A gramenawer a peich la caidita mamaar. A wan mamaar apetecan qué dise usteer amatomaa pecador torpedo al ataquerl me cago en tus muelas. Fistro tiene musho peligro a wan torpedo diodeno se calle ustée te voy a borrar el cerito te voy a borrar el cerito al ataquerl de la pradera. Quietooor la caidita la caidita te va a hasé pupitaa al ataquerl. A wan va usté muy cargadoo a peich ese que llega. No te digo trigo por no llamarte Rodrigor llevame al sircoo benemeritaar apetecan al ataquerl se calle ustée mamaar pecador diodeno benemeritaar. A gramenawer te voy a borrar el cerito sexuarl a gramenawer condemor te va a hasé pupitaa pecador caballo blanco caballo negroorl hasta luego Lucas.
        <br><br>
        Papaar papaar pupita ese que llega va usté muy cargadoo diodeno tiene musho peligro quietooor te va a hasé pupitaa caballo blanco caballo negroorl ese hombree apetecan. Amatomaa no puedor benemeritaar amatomaa pupita pupita diodeno. Papaar papaar diodeno te va a hasé pupitaa benemeritaar caballo blanco caballo negroorl al ataquerl está la cosa muy malar la caidita te voy a borrar el cerito al ataquerl ese que llega. Me cago en tus muelas a peich jarl qué dise usteer amatomaa fistro hasta luego Lucas. A gramenawer torpedo quietooor tiene musho peligro pecador a wan por la gloria de mi madre. Diodeno está la cosa muy malar llevame al sircoo está la cosa muy malar jarl te va a hasé pupitaa de la pradera te voy a borrar el cerito al ataquerl a peich hasta luego Lucas.
        <br><br>
        Ahorarr diodeno a gramenawer amatomaa a peich. Benemeritaar no puedor papaar papaar va usté muy cargadoo torpedo no puedor tiene musho peligro tiene musho peligro. Pupita te va a hasé pupitaa jarl ese hombree va usté muy cargadoo qué dise usteer. Quietooor sexuarl diodeno torpedo. Ese hombree pupita apetecan pupita ese pedazo de te va a hasé pupitaa ahorarr pupita ese hombree no puedor pecador. Se calle ustée diodenoo pupita no puedor tiene musho peligro ahorarr de la pradera apetecan condemor. Caballo blanco caballo negroorl va usté muy cargadoo la caidita diodenoo me cago en tus muelas torpedo. Pecador de la pradera se calle ustée benemeritaar no puedor no puedor a gramenawer.
      </biit-tab>
    </biit-tab-group>
`
});

export const Default = Template.bind({});
