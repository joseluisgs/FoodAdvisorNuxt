import { mount } from '@vue/test-utils';
import RestaurantCard from '@/components/RestaurantCard';

describe('RestaurantCard', () => {
  // Propieaades
  const props = {
    id: 0,
    name: 'nombre',
    description: 'description',
    text: 'testo largo',
    slug: 'slug',
    category: 'categoria',
    city: 'ciudad',
    address: 'direccion',
    likes: 0,
    image: 'https://netlify.pedrojimenez.info/photosCursoOpenWebinar/restaurant08.jpg'
  };
  // Lo cargamos con estas proìedades (inyectadas)
  const wrapper = mount(RestaurantCard, { propsData: props });
  test('is Mounted', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  // Testeamos si tienes estas propiedades al renderizarse
  test('is rendering a restaurant', () => {
    expect(wrapper.props().name).toBe('nombre');
    expect(wrapper.props().description).toBe('description');
  });
});
