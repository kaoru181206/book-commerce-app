import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// ホットリロード時に何度もPrismaインスタンスが生成されるのを防ぐためシングルトンにする
// globalオブジェクトに型アサーションを行う
// 型アサーション　　：　推論された型を上書きする機能のこと
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

// Prismaインスタンスが存在しない場合
if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma;

export default prisma;
