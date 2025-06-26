// src/components/Header.tsx
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header className="container mx-auto py-4 px-4 md:px-0">
      <div className="w-full md:w-1/2 mx-auto">
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;