import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SelectComponent() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Categorias" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="materiaisEscolares">
            Materiais Escolares
          </SelectItem>
          <SelectItem value="Moveis">Moveis</SelectItem>
          <SelectItem value="Brinquedos">Brinquedos</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
