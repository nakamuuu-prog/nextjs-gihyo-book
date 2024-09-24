'use client';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CheckBox from './CheckBox';

type MyFormData = {
  firstName: string;
  lastName: string;
  category: string;
  isChecked: boolean;
};

export default function App() {
  // useFormのフックはregister、handleSubmit、エラーが格納されたオブジェクトを返す
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyFormData>();

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  const onChange = () => {
    console.log('チェックボックスが変更されました。');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        // registerを使って状態を管理する
        // チェック対象とチェック内容のオブジェクトを渡す
        {...register('firstName', { required: true })}
        placeholder="名前"
      />
      {/* チェック内容にひっかかるとエラーメッセージを表示 */}
      {errors.firstName && <div>名前を入力してください。</div>}
      <input {...register('lastName', { required: true })} placeholder="名字" />
      {errors.lastName && <div>名字を入力してください。</div>}
      <select {...register('category', { required: true })}>
        <option value="">選択...</option>
        <option value="A">カテゴリ A</option>
        <option value="B">カテゴリ B</option>
      </select>
      {errors.category && <div>カテゴリを入力してください。</div>}
      {/* Controllerを使うと外部、自作のUIコンポーネントを使うこともできる */}
      <Controller
        name="isChecked"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <CheckBox onChange={onChange} value={value}></CheckBox>
        )}
      />
      {errors.isChecked && <div>チェックしてください。</div>}
      <input type="submit" />
    </form>
  );
}
