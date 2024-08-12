import { Alert } from "@renovy/web-ui";
import { FaBeerMugEmpty } from "react-icons/fa6";

export default function AlertDemo() {
  return (
    <Alert.Root icon={<FaBeerMugEmpty />}>
      <Alert.Title>Title</Alert.Title>
      <Alert.Description>
        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo,
        vitae iaculis nisl. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Manduma pindureta quium dia
        nois paga. Si num tem leite então bota uma pinga aí cumpadi!
      </Alert.Description>
    </Alert.Root>
  );
}
