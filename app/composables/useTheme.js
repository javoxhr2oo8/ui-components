export const useTheme = () => {
  // Глобальное состояние темы (light, dark или system)
  const theme = useState('theme', () => 'system');

  // Функция применения класса к тегу html
  const applyTheme = (current) => {
    if (process.server) return;

    const html = document.documentElement;
    let isDark = false;

    if (current === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = current === 'dark';
    }

    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  };

  // Метод для смены темы
  const setTheme = (val) => {
    theme.value = val;
    localStorage.setItem('app-theme', val);
    applyTheme(val);
  };

  // Инициализация (вызываем один раз при монтировании)
  const initTheme = () => {
    if (process.server) return;
    
    const saved = localStorage.getItem('app-theme') || 'system';
    theme.value = saved;
    applyTheme(saved);

    // Слушаем изменения системной темы "на лету"
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        if (theme.value === 'system') applyTheme('system');
      });
  };

  return {
    theme,
    setTheme,
    initTheme,
    // Вычисляемое свойство для иконок
    isDark: computed(() => {
      if (process.server) return false;
      if (theme.value === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return theme.value === 'dark';
    })
  };
};