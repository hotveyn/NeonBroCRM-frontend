import { createDiscreteApi } from 'naive-ui';

export function useMessageService() {
  const { message } = createDiscreteApi(['message']);

  return {
    department: {
      removed: () => message.success('Отдел удалён', { duration: 5000 }),
      created: () => message.success('Новый отдел создан', { duration: 5000 }),
      updated: () => message.success('Отдел изменён', { duration: 5000 }),
    },
    break: {
      removed: () => message.success('Вид брака удалён', { duration: 5000 }),
      created: () => message.success('Новый вид брака создан', { duration: 5000 }),
      updated: () => message.success('Вид брака изменён', { duration: 5000 }),
    },
    order: {
      removed: () => message.success('Заказ удалён', { duration: 5000 }),
      created: () => message.success('Новый заказ создан', { duration: 5000 }),
      updated: () => message.success('Заказ изменён', { duration: 5000 }),
      toWork: () => message.success('Заказ отправился в работу', { duration: 5000 }),
      restore: () => message.success('Заказ востановлен', { duration: 5000 }),
      stopped: () => message.success('Заказ снят с производства', { duration: 5000 }),
    },
    user: {
      updated: () => message.success('Сотрудник обновлён', { duration: 5000 }),
      fire: () => message.success('Сотрудник уволен', { duration: 5000 }),
      reg: () => message.success('Сотрудник создан', { duration: 5000 }),
      failedReg: () => message.error('Ошибка регистрации', { duration: 5000 }),
      unfire: () => message.success('Сотрудник нанят обратно', { duration: 5000 }),
    },
    auth: {
      login: () => message.success('Вы успешно вошли в аккаунт', { duration: 5000 }),
      logout: () => message.success('Вы вышли из аккаунта', { duration: 5000 }),
      failedLogin: () => message.error('Ошибка входа', { duration: 5000 }),
    },
    stage: {
      claim: () => message.success('Задача взята', { duration: 5000 }),
      break: () => message.success('Задача помечана как брак', { duration: 5000 }),
      ready: () => message.success('Задача выполнена', { duration: 5000 }),
      stop: () => message.error('Задача снята с производства', { duration: 5000 }),
    },
    error: {
      custom: (errorText: string) => message.error(errorText, { duration: 5000 }),
      error: () => message.error('Произошла ошибка', { duration: 5000 }),
    },
    form: {
      validation: () => message.error('Неправильно заполнены поля', { duration: 5000 }),
    },
  };
}
