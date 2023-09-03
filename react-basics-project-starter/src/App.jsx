import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  console.log(selectedItem);
  
  return (
    <div>
      {selectedItem ? (
        <RecipePage recipe={selectedItem} clickFn={setSelectedItem} />
      ) : (
          <>
            <RecipeListPage clickFn={setSelectedItem} />
          </>   
      )}
    </div>
  );
};
