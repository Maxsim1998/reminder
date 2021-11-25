// components
import { ListsItemWrapper } from '../../components';
// styles
import { Lists } from './styles';
// icons
import { PlusOutlined } from '@ant-design/icons';

const testData = [
  {
    title: 'First test one boyyy',
    items: [1, 2, 3, 4, 5, 6],
    id: '1',
  },
];

export const Dashboard = () => {
  const onAddNewList = () => {
    console.log('onAddNewList');
  };

  return (
    <div>
      <Lists>
        {testData.map((item) => (
          <ListsItemWrapper
            key={item.id}
            title={item.title}
            count={item.items.length}
          />
        ))}
        <ListsItemWrapper centered onClick={onAddNewList}>
          <PlusOutlined style={{ fontSize: 70 }} />
        </ListsItemWrapper>
      </Lists>
    </div>
  );
};
