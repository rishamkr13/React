import React from 'react'
import useTheme from '../contexts/theme';


export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    e.target.checked ? darkTheme() : lightTheme();
  };

  return (
    <label className="inline-flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 relative">
        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
        Toggle Theme
      </span>
    </label>
  );
}
