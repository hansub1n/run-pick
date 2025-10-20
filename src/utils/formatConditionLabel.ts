import { CONDITONS } from '@/components/run-proof/form/ConditionButtons';

export const formatConditionLabel = (value: string) => {
  return CONDITONS.find((conditon) => conditon.value === value)?.label ?? '😊 상쾌';
};
